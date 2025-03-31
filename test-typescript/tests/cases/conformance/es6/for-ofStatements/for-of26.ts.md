__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 77,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 71,
                    "argument": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 130,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 83,
              "end": 98,
              "object": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 90,
                "end": 98,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 130,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 130,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 112,
                    "end": 124,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 119,
                      "end": 123
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              }
            },
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
    {
      "type": "ForOfStatement",
      "start": 146,
      "end": 185,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 151,
        "end": 156,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 155,
            "end": 156,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "v",
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
        "type": "NewExpression",
        "start": 160,
        "end": 180,
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 180,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 185,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
