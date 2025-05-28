__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 23,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "Class1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 23,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Class1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Class1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "value": "./Class1",
        "raw": "'./Class1'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 53,
        "decorators": [],
        "name": "decorate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 65,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 65,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 62,
              "end": 65
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 86,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 91,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 199,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 100,
        "end": 199,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 106,
          "end": 112,
          "decorators": [],
          "name": "Class2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 199,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 197,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 119,
                  "end": 128,
                  "expression": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 128,
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 141,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 141,
                "end": 197,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 145,
                    "end": 163,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 145,
                        "end": 151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 145,
                          "end": 151,
                          "decorators": [],
                          "name": "Class1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 154,
                        "end": 163
                      }
                    ]
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 164,
                  "end": 197,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 174,
                      "end": 191,
                      "argument": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 190,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
