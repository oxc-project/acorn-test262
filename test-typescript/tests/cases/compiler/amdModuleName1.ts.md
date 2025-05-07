__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 124,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
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
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 108,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 91,
                    "end": 102,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 91,
                      "end": 101,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 91,
                        "end": 97,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 91,
                          "end": 95
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 100,
                        "end": 101,
                        "raw": "5",
                        "value": 5,
                        "regex": null,
                        "bigint": null
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
        "start": 42,
        "end": 45,
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
      "type": "TSExportAssignment",
      "start": 111,
      "end": 124,
      "expression": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
