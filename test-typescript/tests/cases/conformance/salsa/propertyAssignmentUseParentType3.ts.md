__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 70,
  "end": 325,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 113,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 113,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 111,
            "argument": {
              "type": "Literal",
              "start": 107,
              "end": 110,
              "raw": "123",
              "value": 123
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 83,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 93,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 87,
          "end": 93
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 132,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 114,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 131,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 134,
      "end": 175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 175,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 173,
            "argument": {
              "type": "ArrayExpression",
              "start": 170,
              "end": 172,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 149,
        "end": 156,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 151,
          "end": 156,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 151,
            "end": 154
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 190,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 185,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 181,
            "end": 185,
            "decorators": [],
            "name": "join",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 188,
          "end": 190,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 235,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 235,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 223,
            "end": 233,
            "argument": {
              "type": "Literal",
              "start": 230,
              "end": 232,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 206,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 208,
        "end": 216,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 210,
          "end": 216
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 251,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 250,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 236,
          "end": 245,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 240,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "trim",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 250,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 308,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 308,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 290,
            "end": 306,
            "argument": {
              "type": "ObjectExpression",
              "start": 297,
              "end": 305,
              "properties": [
                {
                  "type": "Property",
                  "start": 298,
                  "end": 304,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 301,
                    "end": 304,
                    "raw": "123",
                    "value": 123
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 266,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 268,
        "end": 283,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 271,
          "end": 282,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 272,
              "end": 281,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 273,
                "end": 281,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 275,
                  "end": 281
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 324,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 309,
          "end": 315,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 314,
            "end": 315,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 318,
          "end": 323,
          "raw": "\"456\"",
          "value": "456"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
