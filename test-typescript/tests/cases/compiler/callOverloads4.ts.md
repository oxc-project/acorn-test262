callOverloads4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 308,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 19,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 18,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 18,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 29,
      "end": 56,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 50,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 55,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 251,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 251,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 127,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 127,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 155,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 143,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 143,
              "end": 155,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 144,
                  "end": 153,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 145,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 147,
                      "end": 153
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 249,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 171,
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
              "start": 171,
              "end": 249,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 249,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 178,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 175,
                      "end": 178
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 262,
            "end": 276,
            "arguments": [
              {
                "type": "Literal",
                "start": 270,
                "end": 275,
                "raw": "\"hey\"",
                "value": "hey"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 290,
      "expression": {
        "type": "CallExpression",
        "start": 280,
        "end": 289,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 280,
          "end": 287,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 287,
            "decorators": [],
            "name": "bar1",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 297,
      "expression": {
        "type": "CallExpression",
        "start": 291,
        "end": 296,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 294,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 307,
      "expression": {
        "type": "CallExpression",
        "start": 298,
        "end": 306,
        "arguments": [
          {
            "type": "Literal",
            "start": 302,
            "end": 305,
            "raw": "\"s\"",
            "value": "s"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 298,
          "end": 301,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
