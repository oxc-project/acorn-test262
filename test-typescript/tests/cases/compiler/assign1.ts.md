assign1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 112,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 112,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 78,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 78,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 37,
                  "end": 49,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "decorators": [],
                    "name": "salt",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 42,
                      "end": 48
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 58,
                  "end": 72,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 64,
                    "decorators": [],
                    "name": "pepper",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 71,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 65,
                      "end": 71
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 110,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 109,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 91,
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 92,
                  "end": 109,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 93,
                      "end": 99,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 97,
                        "decorators": [],
                        "name": "salt",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 98,
                        "end": 99,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "Property",
                      "start": 100,
                      "end": 108,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 106,
                        "decorators": [],
                        "name": "pepper",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 107,
                        "end": 108,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
