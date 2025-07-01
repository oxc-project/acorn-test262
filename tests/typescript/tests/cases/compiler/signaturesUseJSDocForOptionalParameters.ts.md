__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 32
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 32
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 35,
                "end": 39
              },
              "start": 23,
              "end": 39
            },
            "directive": null,
            "start": 23,
            "end": 40
          }
        ],
        "start": 19,
        "end": 42
      },
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 143
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 153
            },
            "optional": false,
            "computed": false,
            "start": 136,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalParam",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 167
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 187
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "notRequired",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 200
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "ThisExpression",
                  "start": 215,
                  "end": 219
                },
                "start": 208,
                "end": 220
              }
            ],
            "start": 202,
            "end": 222
          },
          "expression": false,
          "start": 170,
          "end": 222
        },
        "start": 136,
        "end": 222
      },
      "directive": null,
      "start": 136,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pInst",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 233
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [],
            "start": 236,
            "end": 249
          },
          "definite": false,
          "start": 228,
          "end": 249
        }
      ],
      "declare": false,
      "start": 224,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 257
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 279
              },
              "optional": false,
              "computed": false,
              "start": 260,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 280,
                "end": 287
              }
            ],
            "optional": false,
            "start": 260,
            "end": 288
          },
          "definite": false,
          "start": 255,
          "end": 288
        }
      ],
      "declare": false,
      "start": 251,
      "end": 288
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 295
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 298,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 318,
                "end": 325
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 327,
                "end": 331
              }
            ],
            "optional": false,
            "start": 298,
            "end": 332
          },
          "definite": false,
          "start": 293,
          "end": 332
        }
      ],
      "declare": false,
      "start": 289,
      "end": 332
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 332
}
```
