__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_a",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 54,
                "end": 72
              },
              "start": 52,
              "end": 72
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 35,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                },
                "start": 93,
                "end": 101
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 120
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 120
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 143,
                              "end": 144
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 147
                            },
                            "optional": false,
                            "computed": false,
                            "start": 143,
                            "end": 147
                          },
                          "start": 136,
                          "end": 148
                        }
                      ],
                      "start": 122,
                      "end": 192
                    },
                    "alternate": null,
                    "start": 112,
                    "end": 192
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 209
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 212
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 212
                      },
                      "right": {
                        "type": "Literal",
                        "value": "helloworld",
                        "raw": "'helloworld'",
                        "start": 215,
                        "end": 227
                      },
                      "start": 208,
                      "end": 227
                    },
                    "start": 201,
                    "end": 228
                  }
                ],
                "start": 102,
                "end": 234
              },
              "expression": false,
              "start": 91,
              "end": 234
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 79,
            "end": 234
          }
        ],
        "start": 29,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 236
}
```
