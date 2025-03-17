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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 37,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 61,
                    "end": 68,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 61,
                      "end": 67,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 61,
                        "end": 65
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "end": 10,
        "decorators": [],
        "name": "Base",
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
      "start": 134,
      "end": 323,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 323,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 321,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 174,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 321,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 321,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 187,
                    "end": 194,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 193,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 187,
                        "end": 191
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 271,
                    "end": 279,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 271,
                      "end": 278,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 271,
                        "end": 276
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 278,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 140,
        "end": 147,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
