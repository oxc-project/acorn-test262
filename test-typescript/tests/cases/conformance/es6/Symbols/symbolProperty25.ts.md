__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 54,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 19,
              "end": 37,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 37,
                "decorators": [],
                "name": "toPrimitive",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 53,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 40,
                "end": 53,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 46,
                    "end": 53
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 136,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 134,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 86,
              "end": 104,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 92,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 104,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 134,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 134,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 128,
                    "argument": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "raw": "\"\"",
                      "value": ""
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
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 77,
          "end": 78,
          "expression": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
