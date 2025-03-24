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
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 55,
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
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 108,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 61,
              "end": 76,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 76,
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
              "start": 77,
              "end": 108,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "type": "ForOfStatement",
      "start": 112,
      "end": 151,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 117,
        "end": 122,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
        "start": 126,
        "end": 146,
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 146,
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
        "start": 148,
        "end": 151,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
