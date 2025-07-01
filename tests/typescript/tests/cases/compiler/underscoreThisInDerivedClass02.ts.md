__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 150
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 168
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
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 188,
                      "end": 190
                    },
                    "start": 181,
                    "end": 191
                  }
                ],
                "start": 171,
                "end": 197
              },
              "expression": false,
              "start": 168,
              "end": 197
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 157,
            "end": 197
          }
        ],
        "start": 151,
        "end": 199
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 199
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 208
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 236
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 249,
                        "end": 254
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 249,
                      "end": 256
                    },
                    "directive": null,
                    "start": 249,
                    "end": 257
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
                          "end": 275
                        },
                        "init": {
                          "type": "Literal",
                          "value": "uh-oh?",
                          "raw": "\"uh-oh?\"",
                          "start": 278,
                          "end": 286
                        },
                        "definite": false,
                        "start": 270,
                        "end": 286
                      }
                    ],
                    "declare": false,
                    "start": 266,
                    "end": 287
                  }
                ],
                "start": 239,
                "end": 293
              },
              "expression": false,
              "start": 236,
              "end": 293
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 225,
            "end": 293
          }
        ],
        "start": 219,
        "end": 295
      },
      "abstract": false,
      "declare": false,
      "start": 201,
      "end": 295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 143,
  "end": 295
}
```
