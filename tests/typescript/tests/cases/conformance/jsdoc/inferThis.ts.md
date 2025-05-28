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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 242,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 242,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 92,
              "end": 131,
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
              "value": {
                "type": "FunctionExpression",
                "start": 100,
                "end": 131,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 208,
              "end": 240,
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
              "value": {
                "type": "FunctionExpression",
                "start": 209,
                "end": 240,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 260,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 259,
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
            "callee": {
              "type": "MemberExpression",
              "start": 254,
              "end": 257,
              "object": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 261,
      "end": 263,
      "expression": {
        "type": "Identifier",
        "start": 261,
        "end": 262,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 295,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 294,
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
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "C",
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
      "start": 296,
      "end": 312,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 311,
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
            "callee": {
              "type": "MemberExpression",
              "start": 306,
              "end": 309,
              "object": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 313,
      "end": 315,
      "expression": {
        "type": "Identifier",
        "start": 313,
        "end": 314,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
