__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 38,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 37,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 19,
                "end": 37,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 28,
                    "end": 37
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 199,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
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
              "start": 55,
              "end": 199,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 199,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 79,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 68,
                      "end": 78,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 74,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 77,
                        "end": 78,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 96,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 89,
                      "end": 95,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 89,
                        "end": 93
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 128,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 118,
                      "end": 127,
                      "computed": true,
                      "object": {
                        "type": "ThisExpression",
                        "start": 118,
                        "end": 122
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 123,
                        "end": 126,
                        "raw": "'x'",
                        "value": "x"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 148,
                    "end": 164,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 154,
                        "end": 163,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 157,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 160,
                          "end": 163,
                          "raw": "'x'",
                          "value": "x"
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 183,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 173,
                      "end": 182,
                      "computed": true,
                      "object": {
                        "type": "ThisExpression",
                        "start": 173,
                        "end": 177
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 181,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
