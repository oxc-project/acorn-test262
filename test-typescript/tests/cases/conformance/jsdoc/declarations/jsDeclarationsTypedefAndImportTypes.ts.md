__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 113,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 113,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 81,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
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
              "start": 76,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 81,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 95,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 93,
              "end": 94,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 111,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 106,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 111,
                "body": []
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
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Conn",
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
      "start": 115,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 129,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 121,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 136,
          "decorators": [],
          "name": "Conn",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 265,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
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
              "start": 112,
              "end": 231,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 231,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 149,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 126,
                          "end": 130
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 139,
                          "decorators": [],
                          "name": "connItem",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 142,
                        "end": 148,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 148,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 207,
                    "end": 225,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 207,
                      "end": 224,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 207,
                        "end": 219,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 219,
                          "decorators": [],
                          "name": "another",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 222,
                        "end": 224,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "Wrap",
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
      "start": 235,
      "end": 265,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 235,
        "end": 264,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 235,
          "end": 249,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 235,
            "end": 241,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 249,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 252,
          "end": 264,
          "properties": [
            {
              "type": "Property",
              "start": 258,
              "end": 262,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 262,
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 258,
                "end": 262,
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
