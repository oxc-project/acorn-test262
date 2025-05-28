__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 201,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 201,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 38,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 199,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 199,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 77,
                        "end": 78,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 96,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 89,
                      "end": 95,
                      "object": {
                        "type": "ThisExpression",
                        "start": 89,
                        "end": 93
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 128,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 118,
                      "end": 127,
                      "object": {
                        "type": "ThisExpression",
                        "start": 118,
                        "end": 122
                      },
                      "property": {
                        "type": "Literal",
                        "start": 123,
                        "end": 126,
                        "value": "x",
                        "raw": "'x'"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 148,
                    "end": 164,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 154,
                        "end": 163,
                        "id": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 157,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 160,
                          "end": 163,
                          "value": "x",
                          "raw": "'x'"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 183,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 173,
                      "end": 182,
                      "object": {
                        "type": "ThisExpression",
                        "start": 173,
                        "end": 177
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 181,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
