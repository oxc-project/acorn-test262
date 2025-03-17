__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "runTests",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "name": "outfile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 40,
                  "end": 79,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 44,
                    "end": 77,
                    "object": {
                      "type": "MemberExpression",
                      "start": 44,
                      "end": 60,
                      "object": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 51,
                        "name": "Harness",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 60,
                        "name": "Compiler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 77,
                      "name": "WriterAggregator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 136,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "name": "outerr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 97,
                  "end": 136,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 101,
                    "end": 134,
                    "object": {
                      "type": "MemberExpression",
                      "start": 101,
                      "end": 117,
                      "object": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 108,
                        "name": "Harness",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 117,
                        "name": "Compiler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 134,
                      "name": "WriterAggregator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 228,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 153,
                  "name": "compiler",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 191,
                      "end": 220,
                      "object": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 201,
                        "name": "TypeScript",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 220,
                        "name": "TypeScriptCompiler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 221,
                        "end": 227,
                        "name": "outerr",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeArguments": null
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
                        "name": "TypeScript",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 186,
                        "name": "TypeScriptCompiler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 237,
                "end": 241,
                "id": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 241,
                  "name": "code",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
