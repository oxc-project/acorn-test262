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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 23,
            "end": 40,
            "expression": {
              "type": "AssignmentExpression",
              "start": 23,
              "end": 39,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 23,
                "end": 32,
                "object": {
                  "type": "ThisExpression",
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 32,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 35,
                "end": 39,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 223,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 136,
          "end": 167,
          "object": {
            "type": "MemberExpression",
            "start": 136,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 143,
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 153,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 167,
            "decorators": [],
            "name": "optionalParam",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 170,
          "end": 222,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 250,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 249,
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
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 247,
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 288,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 288,
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
            "callee": {
              "type": "MemberExpression",
              "start": 260,
              "end": 279,
              "object": {
                "type": "Identifier",
                "start": 260,
                "end": 265,
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 266,
                "end": 279,
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 280,
                "end": 287,
                "value": "hello",
                "raw": "'hello'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 332,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 332,
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
            "callee": {
              "type": "MemberExpression",
              "start": 298,
              "end": 317,
              "object": {
                "type": "Identifier",
                "start": 298,
                "end": 303,
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 304,
                "end": 317,
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 318,
                "end": 325,
                "value": "hello",
                "raw": "'hello'"
              },
              {
                "type": "Literal",
                "start": 327,
                "end": 331,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
