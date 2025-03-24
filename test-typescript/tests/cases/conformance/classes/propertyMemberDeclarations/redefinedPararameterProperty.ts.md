__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
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
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 33,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 46,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 91,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 70,
              "end": 76,
              "object": {
                "type": "ThisExpression",
                "start": 70,
                "end": 74
              },
              "property": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 153,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 153,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 111,
                  "end": 127,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 127,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 153,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 139,
                    "end": 147,
                    "expression": {
                      "type": "CallExpression",
                      "start": 139,
                      "end": 146,
                      "callee": {
                        "type": "Super",
                        "start": 139,
                        "end": 144
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
