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
        "decorators": [],
        "name": "runTests",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 244,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 242,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "outfile",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Harness",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 60,
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 77,
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
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
                  "decorators": [],
                  "name": "outerr",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Harness",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 117,
                        "decorators": [],
                        "name": "Compiler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 134,
                      "decorators": [],
                      "name": "WriterAggregator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
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
                  "decorators": [],
                  "name": "compiler",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 156,
                  "end": 228,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 186,
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
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
                        "decorators": [],
                        "name": "TypeScript",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 220,
                        "decorators": [],
                        "name": "TypeScriptCompiler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 221,
                        "end": 227,
                        "decorators": [],
                        "name": "outerr",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
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
                  "decorators": [],
                  "name": "code",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
