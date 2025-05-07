__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 236,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 73,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "decorators": [],
              "name": "_a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 72,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 54,
                "end": 72,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 63,
                    "end": 72
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 234,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 234,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 234,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 112,
                    "end": 192,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 122,
                      "end": 192,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 136,
                          "end": 148,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 143,
                            "end": 147,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 144,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 147,
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 120,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 120,
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 201,
                    "end": 228,
                    "argument": {
                      "type": "AssignmentExpression",
                      "start": 208,
                      "end": 227,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 212,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 212,
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 215,
                        "end": 227,
                        "raw": "'helloworld'",
                        "value": "helloworld",
                        "regex": null,
                        "bigint": null
                      }
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
                "start": 93,
                "end": 101,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
