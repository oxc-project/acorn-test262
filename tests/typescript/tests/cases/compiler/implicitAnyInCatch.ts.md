__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 204,
  "body": [
    {
      "type": "TryStatement",
      "start": 31,
      "end": 98,
      "block": {
        "type": "BlockStatement",
        "start": 35,
        "end": 38,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 39,
        "end": 98,
        "param": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 53,
          "end": 98,
          "body": [
            {
              "type": "IfStatement",
              "start": 59,
              "end": 96,
              "test": {
                "type": "BinaryExpression",
                "start": 63,
                "end": 91,
                "left": {
                  "type": "MemberExpression",
                  "start": 63,
                  "end": 75,
                  "object": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 68,
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 75,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "UnaryExpression",
                  "start": 80,
                  "end": 91,
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "start": 81,
                    "end": 91,
                    "value": 2147024809,
                    "raw": "2147024809"
                  },
                  "prefix": true
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 93,
                "end": 96,
                "body": []
              },
              "alternate": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "ForInStatement",
      "start": 99,
      "end": 124,
      "left": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 111,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ThisExpression",
        "start": 115,
        "end": 119
      },
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 124,
        "body": []
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
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
        "start": 134,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 201,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 201,
                "body": [
                  {
                    "type": "ForInStatement",
                    "start": 164,
                    "end": 195,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 169,
                      "end": 174,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 173,
                          "end": 174,
                          "id": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 178,
                      "end": 182
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 184,
                      "end": 195,
                      "body": []
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
