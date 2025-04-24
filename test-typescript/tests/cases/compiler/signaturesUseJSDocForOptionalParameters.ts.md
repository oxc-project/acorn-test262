__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 332,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 23,
            "end": 40,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 23,
              "end": 39,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 23,
                "end": 32,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 23,
                  "end": 27
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 35,
                "end": 39,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 136,
          "end": 167,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 136,
            "end": 153,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 143,
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 153,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 167,
            "decorators": [],
            "name": "optionalParam",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 170,
          "end": 222,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 202,
            "end": 222,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 208,
                "end": 220,
                "argument": {
                  "type": "ThisExpression",
                  "start": 215,
                  "end": 219
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
              "start": 179,
              "end": 187,
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 189,
              "end": 200,
              "decorators": [],
              "name": "notRequired",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 233,
            "decorators": [],
            "name": "pInst",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 249,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 247,
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 288,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 260,
            "end": 288,
            "arguments": [
              {
                "type": "Literal",
                "start": 280,
                "end": 287,
                "raw": "'hello'",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 260,
              "end": 279,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 260,
                "end": 265,
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 266,
                "end": 279,
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 295,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 298,
            "end": 332,
            "arguments": [
              {
                "type": "Literal",
                "start": 318,
                "end": 325,
                "raw": "'hello'",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 327,
                "end": 331,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 298,
              "end": 317,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 298,
                "end": 303,
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 317,
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
