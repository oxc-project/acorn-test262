__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 434,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 92,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 38,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 44,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 79,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 65,
              "decorators": [],
              "name": "instance1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 68,
              "end": 78,
              "callee": {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 225,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "decorators": [],
        "name": "Subclass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 160,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 146,
              "decorators": [],
              "name": "instance1_1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 149,
              "end": 159,
              "callee": {
                "type": "Identifier",
                "start": 153,
                "end": 157,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 212,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 194,
              "decorators": [],
              "name": "instance1_2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 197,
              "end": 211,
              "callee": {
                "type": "Identifier",
                "start": 201,
                "end": 209,
                "decorators": [],
                "name": "Subclass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 434,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 251,
        "decorators": [],
        "name": "SubclassOfSubclass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 260,
        "end": 268,
        "decorators": [],
        "name": "Subclass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 269,
        "end": 434,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 275,
            "end": 307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 293,
              "decorators": [],
              "name": "instance2_1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 296,
              "end": 306,
              "callee": {
                "type": "Identifier",
                "start": 300,
                "end": 304,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 323,
            "end": 359,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 341,
              "decorators": [],
              "name": "instance2_2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 344,
              "end": 358,
              "callee": {
                "type": "Identifier",
                "start": 348,
                "end": 356,
                "decorators": [],
                "name": "Subclass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 421,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 393,
              "decorators": [],
              "name": "instance2_3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 396,
              "end": 420,
              "callee": {
                "type": "Identifier",
                "start": 400,
                "end": 418,
                "decorators": [],
                "name": "SubclassOfSubclass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
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
