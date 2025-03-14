__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 25,
            "end": 38,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 37,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 30,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "IHandler",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 97,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 97,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 70,
            "end": 95,
            "parameters": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 83,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 77,
                    "end": 83
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 94,
                  "decorators": [],
                  "name": "IHandler",
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
        "start": 52,
        "end": 63,
        "decorators": [],
        "name": "IHandlerMap",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 139,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 137,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "Boz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 137,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 137,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 129,
                  "end": 133
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 141,
      "end": 175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 175,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
        "decorators": [],
        "name": "Biz",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 154,
          "end": 170,
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 170,
                "decorators": [],
                "name": "IHandlerMap",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 192,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 191,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 181,
            "end": 190,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 180,
          "decorators": [],
          "name": "Biz",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
