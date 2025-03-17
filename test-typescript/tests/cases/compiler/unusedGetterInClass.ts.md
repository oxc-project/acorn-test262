__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "Employee",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 47,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "name": "_fullName",
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
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "name": "fullName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 122,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 94,
                    "end": 116,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 101,
                      "end": 115,
                      "object": {
                        "type": "ThisExpression",
                        "start": 101,
                        "end": 105
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 115,
                        "name": "_fullName",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 202,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 188,
              "name": "fullName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 202,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 198,
                  "name": "_",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 192,
                      "end": 198
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 202,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
