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
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 83,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": 123,
              "raw": "123"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 93,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 87,
          "end": 93
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 132,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 114,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 131,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 134,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
      "typeParameters": null,
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 190,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 185,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 181,
            "end": 185,
            "name": "join",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 188,
          "end": 190,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 206,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": "",
              "raw": "\"\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 208,
        "end": 216,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 210,
          "end": 216
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 250,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 236,
          "end": 245,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 240,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "name": "trim",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 248,
          "end": 250,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 266,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 301,
                    "end": 304,
                    "value": 123,
                    "raw": "123"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 273,
                "end": 281,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 275,
                  "end": 281
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 309,
          "end": 315,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "name": "foo4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 314,
            "end": 315,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 318,
          "end": 323,
          "value": "456",
          "raw": "\"456\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
