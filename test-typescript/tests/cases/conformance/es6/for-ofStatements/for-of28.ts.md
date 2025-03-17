__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
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
              "start": 49,
              "end": 54,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 108,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 61,
              "end": 76,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 76,
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
              "start": 77,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 90,
                    "end": 102,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 97,
                      "end": 101
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
        "start": 22,
        "end": 38,
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
      "start": 112,
      "end": 151,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 148,
        "end": 151,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 117,
        "end": 122,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 122,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
        "start": 126,
        "end": 146,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 146,
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
