augmentedTypeBracketAccessIndexSignature.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 19,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 17,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 83,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 83,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 64,
            "end": 81,
            "parameters": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 80,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 57,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 129,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 110,
            "end": 127,
            "parameters": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 120,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 114,
                    "end": 120
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 126,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "decorators": [],
        "name": "Function",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 139,
            "end": 144,
            "computed": true,
            "object": {
              "type": "ObjectExpression",
              "start": 139,
              "end": 141,
              "properties": []
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 142,
              "end": 143,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 185,
            "computed": true,
            "object": {
              "type": "ArrowFunctionExpression",
              "start": 172,
              "end": 181,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 181,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 183,
              "end": 184,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
