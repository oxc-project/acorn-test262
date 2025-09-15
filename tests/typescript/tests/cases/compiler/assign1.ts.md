__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "salt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 44
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    },
                    "start": 44,
                    "end": 51
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 40,
                  "end": 52
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pepper",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 67
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 68,
                      "end": 74
                    },
                    "start": 67,
                    "end": 74
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 75
                }
              ],
              "start": 30,
              "end": 81
            },
            "declare": false,
            "start": 18,
            "end": 81
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      },
                      "typeArguments": null,
                      "start": 93,
                      "end": 94
                    },
                    "start": 92,
                    "end": 94
                  },
                  "start": 91,
                  "end": 94
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "salt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 100
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 101,
                        "end": 102
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 96,
                      "end": 102
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pepper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 109
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 110,
                        "end": 111
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 103,
                      "end": 111
                    }
                  ],
                  "start": 95,
                  "end": 112
                },
                "definite": false,
                "start": 91,
                "end": 112
              }
            ],
            "declare": false,
            "start": 87,
            "end": 113
          }
        ],
        "start": 12,
        "end": 115
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
