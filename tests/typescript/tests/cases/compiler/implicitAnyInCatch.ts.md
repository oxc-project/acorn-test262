__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 35,
        "end": 38
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 51
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 68
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 75
                  },
                  "optional": false,
                  "computed": false,
                  "start": 63,
                  "end": 75
                },
                "operator": "===",
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2147024809,
                    "raw": "2147024809",
                    "start": 81,
                    "end": 91
                  },
                  "prefix": true,
                  "start": 80,
                  "end": 91
                },
                "start": 63,
                "end": 91
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 93,
                "end": 96
              },
              "alternate": null,
              "start": 59,
              "end": 96
            }
          ],
          "start": 53,
          "end": 98
        },
        "start": 39,
        "end": 98
      },
      "finalizer": null,
      "start": 31,
      "end": 98
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 111
            },
            "init": null,
            "definite": false,
            "start": 108,
            "end": 111
          }
        ],
        "declare": false,
        "start": 104,
        "end": 111
      },
      "right": {
        "type": "ThisExpression",
        "start": 115,
        "end": 119
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 121,
        "end": 124
      },
      "start": 99,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
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
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 151
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
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 174
                          },
                          "init": null,
                          "definite": false,
                          "start": 173,
                          "end": 174
                        }
                      ],
                      "declare": false,
                      "start": 169,
                      "end": 174
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 178,
                      "end": 182
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 184,
                      "end": 195
                    },
                    "start": 164,
                    "end": 195
                  }
                ],
                "start": 154,
                "end": 201
              },
              "expression": false,
              "start": 151,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 140,
            "end": 201
          }
        ],
        "start": 134,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 204
}
```
