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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 236,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 73,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "name": "_a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 234,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 234,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 234,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 112,
                    "end": 192,
                    "test": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 120,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 120,
                        "name": "_a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
                            "object": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 144,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 147,
                              "name": "_a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      ]
                    },
                    "alternate": null
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
                        "object": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 212,
                          "name": "_a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 215,
                        "end": 227,
                        "value": "helloworld",
                        "raw": "'helloworld'"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 101,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
