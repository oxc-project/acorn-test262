__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 255,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 2,
      "end": 42,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "$",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 37,
          "decorators": [],
          "name": "selector",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 41,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 40,
          "end": 41,
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "$",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 47,
      "end": 102,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 102,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 67,
            "end": 98,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 75,
              "decorators": [],
              "name": "addClass",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 93,
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "$",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 105,
      "end": 213,
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 120,
            "end": 157,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 127,
              "end": 157,
              "body": {
                "type": "TSInterfaceBody",
                "start": 150,
                "end": 157,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 137,
                "end": 149,
                "decorators": [],
                "name": "AjaxSettings",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 209,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 169,
              "end": 209,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 209,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "decorators": [],
                "name": "ajax",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 183,
                  "end": 204,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 192,
                      "end": 204,
                      "typeName": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 204,
                        "decorators": [],
                        "name": "AjaxSettings",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "$",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 225,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 224,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 228,
            "end": 253,
            "arguments": [
              {
                "type": "Literal",
                "start": 247,
                "end": 252,
                "raw": "'bar'",
                "value": "bar"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 228,
              "end": 246,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 228,
                "end": 237,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 230,
                    "end": 236,
                    "raw": "'.foo'",
                    "value": ".foo"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 246,
                "decorators": [],
                "name": "addClass",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
