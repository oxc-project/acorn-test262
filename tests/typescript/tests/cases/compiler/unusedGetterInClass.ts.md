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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "Employee",
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
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 47,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "_fullName",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "decorators": [],
              "name": "fullName",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 122,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                }
              },
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
                        "decorators": [],
                        "name": "_fullName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 202,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 188,
              "decorators": [],
              "name": "fullName",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 202,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 198,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 192,
                      "end": 198
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 202,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
