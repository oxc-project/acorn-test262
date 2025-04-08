__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "x",
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
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 130,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 130,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 61,
                    "end": 68,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 67,
                      "object": {
                        "type": "ThisExpression",
                        "start": 61,
                        "end": 65
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 134,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 323,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 321,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 174,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 321,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 321,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 187,
                    "end": 194,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 193,
                      "object": {
                        "type": "ThisExpression",
                        "start": 187,
                        "end": 191
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 271,
                    "end": 279,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 271,
                      "end": 278,
                      "object": {
                        "type": "Super",
                        "start": 271,
                        "end": 276
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 278,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
