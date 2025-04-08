__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 54,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 19,
              "end": 37,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 37,
                "name": "toPrimitive",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 53,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 40,
                "end": 53,
                "typeParameters": null,
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 136,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 86,
              "end": 104,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 92,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 104,
                "name": "toPrimitive",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 130,
                    "argument": {
                      "type": "Literal",
                      "start": 125,
                      "end": 129,
                      "value": true,
                      "raw": "true"
                    }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 77,
          "end": 78,
          "expression": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
