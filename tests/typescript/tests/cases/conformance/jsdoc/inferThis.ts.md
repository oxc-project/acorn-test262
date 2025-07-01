__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 120,
                        "end": 124
                      },
                      "start": 113,
                      "end": 125
                    }
                  ],
                  "start": 103,
                  "end": 131
                },
                "expression": false,
                "start": 100,
                "end": 131
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 92,
              "end": 131
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 229,
                        "end": 233
                      },
                      "start": 222,
                      "end": 234
                    }
                  ],
                  "start": 212,
                  "end": 240
                },
                "expression": false,
                "start": 209,
                "end": 240
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 208,
              "end": 240
            }
          ],
          "start": 15,
          "end": 242
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 242
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 242
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 251
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 254,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 254,
            "end": 259
          },
          "definite": false,
          "start": 250,
          "end": 259
        }
      ],
      "declare": false,
      "start": 244,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 262
      },
      "directive": null,
      "start": 261,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "typeArguments": null,
            "arguments": [],
            "start": 287,
            "end": 294
          },
          "definite": false,
          "start": 283,
          "end": 294
        }
      ],
      "declare": false,
      "start": 277,
      "end": 295
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "optional": false,
              "computed": false,
              "start": 306,
              "end": 309
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 306,
            "end": 311
          },
          "definite": false,
          "start": 302,
          "end": 311
        }
      ],
      "declare": false,
      "start": 296,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 314
      },
      "directive": null,
      "start": 313,
      "end": 315
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 320
}
```
