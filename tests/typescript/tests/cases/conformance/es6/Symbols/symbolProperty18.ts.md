__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 124,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 124,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 34,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 15,
                  "end": 30,
                  "object": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 30,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 40,
                "end": 76,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 41,
                  "end": 59,
                  "object": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 47,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 59,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 60,
                  "end": 76,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 63,
                    "end": 76,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 65,
                        "end": 74,
                        "argument": {
                          "type": "Literal",
                          "start": 72,
                          "end": 74,
                          "value": "",
                          "raw": "\"\""
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 82,
                "end": 122,
                "kind": "set",
                "key": {
                  "type": "MemberExpression",
                  "start": 87,
                  "end": 105,
                  "object": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 93,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 105,
                    "decorators": [],
                    "name": "toPrimitive",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 106,
                  "end": 122,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 107,
                      "end": 117,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 108,
                        "end": 117,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 110,
                          "end": 117
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 119,
                    "end": 122,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 154,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 137,
              "end": 152,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 152,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 189,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 162,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 165,
            "end": 188,
            "callee": {
              "type": "MemberExpression",
              "start": 165,
              "end": 186,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "MemberExpression",
                "start": 167,
                "end": 185,
                "object": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 173,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 185,
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 220,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 219,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 190,
          "end": 211,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 192,
            "end": 210,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 198,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 199,
              "end": 210,
              "decorators": [],
              "name": "toPrimitive",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 214,
          "end": 219,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
