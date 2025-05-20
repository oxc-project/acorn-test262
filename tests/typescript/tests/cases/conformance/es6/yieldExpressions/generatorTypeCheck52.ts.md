__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 47,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 82,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 68,
              "end": 81,
              "argument": {
                "type": "NewExpression",
                "start": 74,
                "end": 81,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 81,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 101,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 87,
              "end": 100,
              "argument": {
                "type": "NewExpression",
                "start": 93,
                "end": 100,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 100,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
