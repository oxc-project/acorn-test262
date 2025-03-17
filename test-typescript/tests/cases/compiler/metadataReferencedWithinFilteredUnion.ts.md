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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "name": "Class1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 23,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "Class1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "Class1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "decorate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 65,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 65,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 62,
              "end": 65
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 86,
          "name": "propertyKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 91,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 199,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 100,
        "end": 199,
        "id": {
          "type": "Identifier",
          "start": 106,
          "end": 112,
          "name": "Class2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 199,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 197,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 141,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 141,
                "end": 197,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
                          "name": "Class1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                }
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 119,
                  "end": 128,
                  "expression": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 128,
                    "name": "decorate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
