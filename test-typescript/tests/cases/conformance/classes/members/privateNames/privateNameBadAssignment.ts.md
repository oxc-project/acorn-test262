__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 348,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 17,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 13,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "PrivateIdentifier",
            "start": 8,
            "end": 13,
            "name": "nope"
          }
        },
        "right": {
          "type": "Literal",
          "start": 16,
          "end": 17,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 75,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 75,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 96,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 76,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 76,
          "end": 91,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 76,
            "end": 87,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 87,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "PrivateIdentifier",
            "start": 88,
            "end": 91,
            "name": "no"
          }
        },
        "right": {
          "type": "Literal",
          "start": 94,
          "end": 95,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 136,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 146,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 157,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 147,
          "end": 153,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "PrivateIdentifier",
            "start": 149,
            "end": 153,
            "name": "foo"
          }
        },
        "right": {
          "type": "Literal",
          "start": 156,
          "end": 157,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 207,
      "end": 348,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 348,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 230,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 221,
              "end": 225,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 228,
              "end": 229,
              "raw": "6",
              "value": 6
            }
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 346,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 246,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 346,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 346,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 260,
                    "end": 277,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 260,
                      "end": 276,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 260,
                        "end": 272,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 260,
                          "end": 267,
                          "decorators": [],
                          "name": "exports",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 268,
                          "end": 272,
                          "name": "bar"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 275,
                        "end": 276,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 298,
                    "end": 312,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 298,
                      "end": 311,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 298,
                        "end": 307,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 298,
                          "end": 302
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 303,
                          "end": 307,
                          "name": "foo"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 310,
                        "end": 311,
                        "raw": "3",
                        "value": 3
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "decorators": [],
        "name": "C",
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
