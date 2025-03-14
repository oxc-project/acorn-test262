selfReferencesInFunctionParameters.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 31,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 13,
          "end": 26,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 13,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 22,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 16,
                "end": 22
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 73,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 73,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 46,
          "end": 53,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 46,
            "end": 48,
            "decorators": [],
            "name": "x0",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 51,
            "end": 53,
            "raw": "\"\"",
            "value": ""
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 55,
          "end": 68,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 122,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 100,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 122,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 101,
                  "end": 106,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 105,
                    "end": 106,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 108,
                  "end": 113,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 133,
            "end": 178,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 136,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 178,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 137,
                  "end": 143,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 141,
                    "end": 143,
                    "raw": "\"\"",
                    "value": ""
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 145,
                  "end": 169,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 154,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 157,
                    "end": 169,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 157,
                      "end": 167,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 158,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 167,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
