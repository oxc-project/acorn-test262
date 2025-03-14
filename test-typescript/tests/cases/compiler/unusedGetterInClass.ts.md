unusedGetterInClass.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 47,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "_fullName",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 122,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "decorators": [],
              "name": "fullName",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 122,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 101,
                        "end": 105
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 115,
                        "decorators": [],
                        "name": "_fullName",
                        "optional": false
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 202,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 188,
              "decorators": [],
              "name": "fullName",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 202,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "Employee",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
