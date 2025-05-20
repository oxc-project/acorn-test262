__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 61,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 61,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 55,
                    "argument": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 66,
            "end": 114,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 67,
              "end": 82,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 67,
                "end": 73,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 82,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 114,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 96,
                    "end": 108,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 103,
                      "end": 107
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
        "start": 6,
        "end": 22,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 128,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 128,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 125,
                "end": 128
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 130,
      "end": 169,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 169,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 135,
        "end": 140,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 140,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 144,
        "end": 164,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 164,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
