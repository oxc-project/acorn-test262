__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 205,
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
          "name": "error",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                    "name": "error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 75,
                    "name": "number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "UnaryExpression",
                  "start": 80,
                  "end": 91,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 81,
                    "end": 91,
                    "value": 2147024809,
                    "raw": "2147024809"
                  }
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
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
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "name": "temp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 173,
                          "end": 174,
                          "id": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
