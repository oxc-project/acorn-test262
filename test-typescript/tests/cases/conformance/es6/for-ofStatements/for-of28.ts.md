__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 92,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 45,
              "end": 60,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 51,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 60,
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
              "start": 61,
              "end": 92,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 92,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 86,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 81,
                      "end": 85
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
      "type": "ForOfStatement",
      "start": 96,
      "end": 135,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 135,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 101,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 105,
            "end": 106,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
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
        "start": 110,
        "end": 130,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 130,
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
