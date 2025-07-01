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
        "start": 7,
        "end": 8
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
              "start": 25,
              "end": 26
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
                    "start": 37,
                    "end": 41
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 42,
                      "end": 48
                    },
                    "start": 41,
                    "end": 48
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 37,
                  "end": 49
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
                    "start": 58,
                    "end": 64
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 65,
                      "end": 71
                    },
                    "start": 64,
                    "end": 71
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 58,
                  "end": 72
                }
              ],
              "start": 27,
              "end": 78
            },
            "declare": false,
            "start": 15,
            "end": 78
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
                        "start": 90,
                        "end": 91
                      },
                      "typeArguments": null,
                      "start": 90,
                      "end": 91
                    },
                    "start": 89,
                    "end": 91
                  },
                  "start": 88,
                  "end": 91
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
                        "start": 93,
                        "end": 97
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 98,
                        "end": 99
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 93,
                      "end": 99
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
                        "start": 100,
                        "end": 106
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 107,
                        "end": 108
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 100,
                      "end": 108
                    }
                  ],
                  "start": 92,
                  "end": 109
                },
                "definite": false,
                "start": 88,
                "end": 109
              }
            ],
            "declare": false,
            "start": 84,
            "end": 110
          }
        ],
        "start": 9,
        "end": 112
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 112
}
```
