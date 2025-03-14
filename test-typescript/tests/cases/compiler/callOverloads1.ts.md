callOverloads1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 61,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
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
              "start": 29,
              "end": 61,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 61,
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
            "start": 67,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
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
              "start": 78,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 156,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 85,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 160,
      "end": 175,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 172,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 207,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 196,
        "decorators": [],
        "name": "F1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 205,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 205,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 199,
              "end": 205
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 239,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 239,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 229,
            "end": 238,
            "argument": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "decorators": [],
        "name": "F1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 220,
          "end": 225,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 225,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 222,
              "end": 225
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 250,
            "end": 264,
            "arguments": [
              {
                "type": "Literal",
                "start": 258,
                "end": 263,
                "raw": "\"hey\"",
                "value": "hey"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
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
      "start": 268,
      "end": 278,
      "expression": {
        "type": "CallExpression",
        "start": 268,
        "end": 277,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 268,
          "end": 275,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 271,
            "end": 275,
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
      "start": 279,
      "end": 285,
      "expression": {
        "type": "CallExpression",
        "start": 279,
        "end": 284,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 279,
          "end": 282,
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
