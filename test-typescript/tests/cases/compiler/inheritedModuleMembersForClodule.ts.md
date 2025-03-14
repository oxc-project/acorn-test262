__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 64,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 64,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 45,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "raw": "\"123\"",
                      "value": "123"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 89,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 164,
      "body": {
        "type": "TSModuleBlock",
        "start": 100,
        "end": 164,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 161,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 113,
              "end": 161,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 161,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 146,
                    "end": 155,
                    "argument": {
                      "type": "Literal",
                      "start": 153,
                      "end": 154,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 129,
                  "end": 135
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 161,
            "end": 162
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 239,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 184,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 190,
            "end": 237,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 200,
              "end": 237,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 237,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 213,
                    "end": 231,
                    "argument": {
                      "type": "CallExpression",
                      "start": 220,
                      "end": 230,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 220,
                        "end": 228,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 220,
                          "end": 224
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 228,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
