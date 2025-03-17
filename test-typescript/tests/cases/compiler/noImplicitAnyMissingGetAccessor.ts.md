__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 194,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 90,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 55,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 82,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 82,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 103,
        "name": "Child",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 127,
              "name": "_x",
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
              "start": 127,
              "end": 132,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 129,
                "end": 132
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 192,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 156,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 160,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 192,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 172,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 179,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 179,
                          "name": "_x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 185,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
