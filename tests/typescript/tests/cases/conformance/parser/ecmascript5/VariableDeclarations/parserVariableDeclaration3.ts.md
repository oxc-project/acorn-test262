__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "runTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outfile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Harness",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 51
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 60
                      },
                      "optional": false,
                      "computed": false,
                      "start": 44,
                      "end": 60
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 77
                    },
                    "optional": false,
                    "computed": false,
                    "start": 44,
                    "end": 77
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 40,
                  "end": 79
                },
                "definite": false,
                "start": 30,
                "end": 79
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outerr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Harness",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 117
                      },
                      "optional": false,
                      "computed": false,
                      "start": 101,
                      "end": 117
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 134
                    },
                    "optional": false,
                    "computed": false,
                    "start": 101,
                    "end": 134
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 97,
                  "end": 136
                },
                "definite": false,
                "start": 88,
                "end": 136
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 153
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 167
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 186
                      },
                      "start": 157,
                      "end": 186
                    },
                    "typeArguments": null,
                    "start": 157,
                    "end": 186
                  },
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 201
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 191,
                      "end": 220
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outerr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 227
                      }
                    ],
                    "start": 187,
                    "end": 228
                  },
                  "start": 156,
                  "end": 228
                },
                "definite": false,
                "start": 145,
                "end": 228
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "code",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 241
                },
                "init": null,
                "definite": false,
                "start": 237,
                "end": 241
              }
            ],
            "declare": false,
            "start": 26,
            "end": 242
          }
        ],
        "start": 20,
        "end": 244
      },
      "expression": false,
      "start": 0,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
}
```
