__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 242,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 242,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 242,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 92,
              "end": 131,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 100,
                "end": 131,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 103,
                  "end": 131,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 113,
                      "end": 125,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 120,
                        "end": 124
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
            },
            {
              "type": "MethodDefinition",
              "start": 208,
              "end": 240,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 209,
                "end": 240,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 212,
                  "end": 240,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 222,
                      "end": 234,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 229,
                        "end": 233
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 254,
            "end": 259,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 254,
              "end": 257,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "a",
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 263,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 261,
        "end": 262,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 287,
            "end": 294,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 306,
            "end": 311,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 306,
              "end": 309,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "b",
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 315,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 313,
        "end": 314,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
