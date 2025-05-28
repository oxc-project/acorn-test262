__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 66,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 66,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 36,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 29,
                  "end": 35
                }
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "StaticBlock",
              "start": 39,
              "end": 64,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 52,
                  "end": 60,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 52,
                    "end": 59,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 52,
                      "end": 55,
                      "object": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 58,
                      "end": 59,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
