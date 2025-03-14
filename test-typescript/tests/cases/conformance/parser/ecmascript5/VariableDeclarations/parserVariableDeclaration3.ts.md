parserVariableDeclaration3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 244,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 244,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 242,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "outfile",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 40,
                  "end": 79,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 44,
                    "end": 77,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 44,
                      "end": 60,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 51,
                        "decorators": [],
                        "name": "Harness",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 60,
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 77,
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 136,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "decorators": [],
                  "name": "outerr",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 97,
                  "end": 136,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 101,
                    "end": 134,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 101,
                      "end": 117,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 108,
                        "decorators": [],
                        "name": "Harness",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 117,
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 134,
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 228,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 153,
                  "decorators": [],
                  "name": "compiler",
                  "optional": false
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 156,
                  "end": 228,
                  "expression": {
                    "type": "NewExpression",
                    "start": 187,
                    "end": 228,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 221,
                        "end": 227,
                        "decorators": [],
                        "name": "outerr",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 191,
                      "end": 220,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 201,
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 220,
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 157,
                    "end": 186,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 157,
                      "end": 186,
                      "left": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 167,
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 186,
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 237,
                "end": 241,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 241,
                  "decorators": [],
                  "name": "code",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "runTests",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
