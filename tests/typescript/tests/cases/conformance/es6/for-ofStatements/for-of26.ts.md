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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 61,
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
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 61,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 114,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 67,
              "end": 82,
              "object": {
                "type": "Identifier",
                "start": 67,
                "end": 73,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 82,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 114,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 128,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 130,
      "end": 169,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 135,
        "end": 140,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "v",
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
        "type": "NewExpression",
        "start": 144,
        "end": 164,
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 164,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 169,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
