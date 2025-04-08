__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 43,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "name": "Task",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 29,
          "end": 36,
          "name": "Promise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 43,
          "body": []
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 17,
          "end": 20,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 18,
              "end": 19,
              "name": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 36,
          "end": 39,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 37,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
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
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Task",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Task",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "value": "./task",
        "raw": "\"./task\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 89,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 87,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 61,
              "name": "example",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 87,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 87,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 78,
                    "end": 85,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 61,
                "end": 64,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 62,
                    "end": 63,
                    "name": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 68,
                  "end": 75,
                  "typeName": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 72,
                    "name": "Task",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 72,
                    "end": 75,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 73,
                        "end": 74,
                        "typeName": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
